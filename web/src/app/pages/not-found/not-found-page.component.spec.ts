import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
    let component: NotFoundPageComponent;
    let fixture: ComponentFixture<NotFoundPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NotFoundPageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(NotFoundPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the not found message', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent?.trim()).toContain('not found page works!');
    });
});
