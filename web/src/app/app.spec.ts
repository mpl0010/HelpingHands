import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

describe('App', () => {
    let harness: RouterTestingHarness;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [
                provideRouter([
                    { path: '', component: LandingPageComponent },
                    {
                        path: 'about',
                        loadComponent: () =>
                            import('./pages/about-us/about-us-page.component').then(
                                (m) => m.AboutUsPageComponent
                            ),
                    },
                    { path: '**', component: NotFoundPageComponent },
                ]),
            ]
        }).compileComponents();

        harness = await RouterTestingHarness.create();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render the router outlet', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });

    it('should render the footer', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('app-footer')).toBeTruthy();
    });

    it('should display landing page component for default route', async () => {
        await harness.navigateByUrl('');
        expect(harness.routeNativeElement?.tagName.toLowerCase()).toBe('app-landing-page');
    });

    it('should display about us page component for about route', async () => {
        await harness.navigateByUrl('/about');
        expect(harness.routeNativeElement?.tagName.toLowerCase()).toBe('app-about-us-page');
    });

    it('should display not found page component for not found route', async () => {
        await harness.navigateByUrl('/not-found-test');
        expect(harness.routeNativeElement?.tagName.toLowerCase()).toBe('app-not-found-page');
    });
});
