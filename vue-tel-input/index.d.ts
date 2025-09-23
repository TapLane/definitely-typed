import {
    DefineComponent,
    Plugin,
    ObjectDirective,
    ComputedGetter,
    WritableComputedOptions,
} from "vue";

declare const VueTelInput: VueTelInputConstructor;
export default VueTelInput;
export { VueTelInput };

export interface VueTelInputProps {
    value: string;
    placeholder: string;
    autoDefaultCountry: boolean;
    disabled: boolean;
    disabledFormatting: boolean;
    invalidMsg: string;
    required: boolean;
    defaultCountry: string;
    enabledCountryCode: boolean;
    enabledFlags: boolean;
    preferredCountries: any[];
    onlyCountries: any[];
    ignoredCountries: any[];
    autocomplete: string;
    name: string;
    wrapperClasses: string;
    inputClasses: string;
    dropdownOptions: VueTelInputDowndownOption;
    inputOptions: VueTelInputInputOption;
    maxLen: number;
}

export interface VueTelInputData {
    phone: string;
    activeCountry: VueTelInputCountryOption;
    open: boolean;
    selectedIndex: any;
    typeToFindInput: string;
    typeToFindTimer: any;
}

export interface VueTelInputMethods {
    initializeCountry: () => void;
    getCountries: (list: any[]) => any[];
    findCountry: (iso: string) => any[];
    getItemClass: (index: number, iso2: string) => any;
    choose: (country: any) => void;
    onInput: () => void;
    onBlur: () => void;
    toggleDropdown: () => void;
    clickedOutside: () => void;
    keyboardNav: (e: Event) => void;
    reset: () => void;
}

/**
 * ✅ Computed values explicitly typed as ComputedGetter<T>
 */
export interface VueTelInputComputed {
    mode: ComputedGetter<string>;
    filteredCountries: ComputedGetter<string[]>;
    sortedCountries: ComputedGetter<string[]>;
    formattedResult: ComputedGetter<string>;
    state: ComputedGetter<boolean>;
    response: ComputedGetter<VueTelInputResponse>;
}

export interface VueTelInputDirective {
    "click-outside": ObjectDirective;
}

export interface VueTelInputResponse {
    number: string;
    isValid: boolean;
    country: VueTelInputCountryOption;
}

export interface VueTelInputCountryOption {
    iso2: string;
}

export interface VueTelInputDowndownOption {
    disabledDialCode: boolean;
}

export interface VueTelInputInputOption {
    showDialCode: boolean;
}

/**
 * ✅ Use Vue's built-in ComputedOptions constraint
 */
export type VueTelInputConstructor = DefineComponent<
    VueTelInputProps,
    {},
    VueTelInputData,
    VueTelInputComputed,
    VueTelInputMethods
> &
    Plugin & {
    directives: VueTelInputDirective;
};
