import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    title = 'Personal Information';
    fullNameTitle = 'Full Name';
    mobileTitle = 'Mobile';
    emailTitle = 'Email';
    locationTitle = 'Location';
    profesionTitle = 'Profession';
    profesion = 'FullStack Developer';
    location= 'San Cristobal, Venezuela';
    experienceTitle = 'Experience';
    languagesTitle = 'My languages';
    languages = 'Native Spanish and English B1-B2 (Spoken and Written).';

    getExperienceTime(): string{
        const currentDate = new Date().getFullYear();
        return currentDate - 2009 + ' Years';
    }
}