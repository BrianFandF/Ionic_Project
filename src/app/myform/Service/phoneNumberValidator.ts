import { AbstractControl, ValidatorFn } from "@angular/forms";
import { PhoneNumberValidatorService } from "./phone-number-validator.service";

export function phoneNumberValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new PhoneNumberValidatorService()
        let valid =
            !control.value || validator.validate_phoneNumber(control.value)
        return valid ? null : { date: true }
    }
}