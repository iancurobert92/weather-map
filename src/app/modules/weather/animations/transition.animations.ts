import { animate, animation, style } from "@angular/animations";

export const fadeAnim = animation([
    style({
        opacity:'{{opacity}}'
    }),
    animate('{{time}}')
])