import { AbstractControl, ValidatorFn } from "@angular/forms";
import { CalculationService } from "./calculation.service";

export function numberValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new CalculationService()
        let valid =
            !control.value || validator.isValidNumber(control.value)
        return valid ? null : { date: true }
    }
}