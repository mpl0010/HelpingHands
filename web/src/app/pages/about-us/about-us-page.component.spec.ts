import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageComponent } from './about-us-page.component';

describe('AboutUsPageComponent', () => {
    let component: AboutUsPageComponent;
    let fixture: ComponentFixture<AboutUsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutUsPageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AboutUsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the about us message', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent?.trim()).toContain('About Us page works!');
    });
});
