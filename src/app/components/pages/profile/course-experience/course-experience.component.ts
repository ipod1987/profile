import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export interface Course {
        icon: string
        title: string
        company: string
        companyLogo: string
        expeditionDate: string
        credentialUrl: string
        status: string
        tags: string[]
    }

@Component({
    selector: 'app-course-experience',
    templateUrl: './course-experience.component.html',
    styleUrls: ['./course-experience.component.scss']
})
export class CourseExperienceComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.loadCourses();
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    myCourses: Course[] = [];

    loadCourses() {
        this.myCourses.push({
            icon: "https://static.platzi.com/media/achievements/badges-basico-testing-java-29e71f98-06e3-4ce3-8417-218ee0cfaf4a.png",
            title: "Curso Básico de Testing en Java",
            company: "Platzi",
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQEOTcHh0HnWwQ/company-logo_100_100/0/1677870817987?e=1697068800&v=beta&t=6Fd-Jz2Dda07mqbiIbdKyITMZL7X6xgo-_23QU8m-Xs",
            expeditionDate: "July 2023",
            credentialUrl: "https://platzi.com/p/engelsmedina/curso/1503-testing-java/diploma/detalle/",
            status: "completed",
            tags: ["Java", "Api", "Spring"]
        });
        this.myCourses.push({
            icon: "https://static.platzi.com/media/achievements/badges-fundamentos-docker-c1277cec-3ef7-4557-9f83-2649bec9fe70.png",
            title: "Curso de Docker",
            company: "Platzi",
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQEOTcHh0HnWwQ/company-logo_100_100/0/1677870817987?e=1697068800&v=beta&t=6Fd-Jz2Dda07mqbiIbdKyITMZL7X6xgo-_23QU8m-Xs",
            expeditionDate: "June 2023",
            credentialUrl: "https://platzi.com/p/engelsmedina/curso/1503-testing-java/diploma/detalle/",
            status: "completed",
            tags: ["Docker"]
        });
        this.myCourses.push({
            icon: "https://static.platzi.com/media/achievements/badge-fundamentos-spring-boot-bcdd22a8-7b4f-4764-9d1e-c8b4a8fb9417.png",
            title: "Curso de Java: Backend con Spring Boot",
            company: "Platzi",
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQEOTcHh0HnWwQ/company-logo_100_100/0/1677870817987?e=1697068800&v=beta&t=6Fd-Jz2Dda07mqbiIbdKyITMZL7X6xgo-_23QU8m-Xs",
            expeditionDate: "April 2023",
            credentialUrl: "https://platzi.com/p/engelsmedina/curso/1503-testing-java/diploma/detalle/",
            status: "completed",
            tags: ["Java", "Api", "Spring Boot"]
        });
        this.myCourses.push({
            icon: "https://static.platzi.com/media/achievements/badge-practico-html-css-1-106665ee-bf4f-4301-8991-1fab9e54a73e.png",
            title: "Curso Práctico de HTML y CSS",
            company: "Platzi",
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQEOTcHh0HnWwQ/company-logo_100_100/0/1677870817987?e=1697068800&v=beta&t=6Fd-Jz2Dda07mqbiIbdKyITMZL7X6xgo-_23QU8m-Xs",
            expeditionDate: "March 2021",
            credentialUrl: "https://platzi.com/p/engelsmedina/curso/1503-testing-java/diploma/detalle/",
            status: "completed",
            tags: ["Html", "Css"]
        });        
        this.myCourses.push({
            icon: "https://static.platzi.com/media/achievements/piezas-introduccion-testing-javascript_badge-d7b160a8-4455-4723-86a8-a7276fd17ef8.png",
            title: "Curso de Introducción al Testing con JavaScript",
            company: "Platzi",
            companyLogo: "https://media.licdn.com/dms/image/C4E0BAQEOTcHh0HnWwQ/company-logo_100_100/0/1677870817987?e=1697068800&v=beta&t=6Fd-Jz2Dda07mqbiIbdKyITMZL7X6xgo-_23QU8m-Xs",
            expeditionDate: "-",
            credentialUrl: "https://platzi.com/p/engelsmedina/curso/1503-testing-java/diploma/detalle/",
            status: "in progress",
            tags: ["Html", "Css"]
        });        
    }

}