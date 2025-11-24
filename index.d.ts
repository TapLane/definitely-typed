import type { App, Plugin, DefineComponent, DirectiveBinding } from 'vue'

declare const VueTelInput: VueTelInputComponent
export default VueTelInput
export { VueTelInput }

export interface VueTelInputProps {
    value?: string
    mode?: 'auto' | 'international'
    placeholder?: string
    autoDefaultCountry?: boolean
    disabled?: boolean
    disabledFormatting?: boolean
    invalidMsg?: string
    required?: boolean
    defaultCountry?: string
    enabledCountryCode?: boolean
    enabledFlags?: boolean
    preferredCountries?: any[]
    onlyCountries?: any[]
    ignoredCountries?: any[]
    autocomplete?: string
    name?: string
    wrapperClasses?: string
    inputClasses?: string
    dropdownOptions?: VueTelInputDowndownOption
    inputOptions?: VueTelInputInputOption
    maxLen?: number
}

export interface VueTelInputData {
    phone: string
    activeCountry: VueTelInputCountryOption
    open: boolean
    selectedIndex: any
    typeToFindInput: string
    typeToFindTimer: any
}

export interface VueTelInputWatch {
    state: (value: any) => void
    value: () => void
}

export interface VueTelInputMethods {
    initializeCountry: () => void
    getCountries: (list: any[]) => any[]
    findCountry: (iso: string) => any[]
    getItemClass: (index: number, iso2: string) => any
    choose: (country: any) => void
    onInput: () => void
    onBlur: () => void
    toggleDropdown: () => void
    clickedOutside: () => void
    keyboardNav: (e: Event) => void
    reset: () => void
}

export interface VueTelInputComputed {
    mode: () => string
    filteredCountries: () => string[]
    sortedCountries: () => string[]
    formattedResult: () => string
    state: () => boolean
    response: () => VueTelInputResponse
}

export interface VueTelInputDirective {
    'click-outside': {
        beforeMount?: (el: Element, binding: DirectiveBinding) => void
        mounted?: (el: Element, binding: DirectiveBinding) => void
        beforeUpdate?: (el: Element, binding: DirectiveBinding) => void
        updated?: (el: Element, binding: DirectiveBinding) => void
        beforeUnmount?: (el: Element, binding: DirectiveBinding) => void
        unmounted?: (el: Element, binding: DirectiveBinding) => void
    }
}

export interface VueTelInputResponse {
    number: string
    isValid: boolean
    country: VueTelInputCountryOption
}

export interface VueTelInputCountryOption {
    iso2: string
}

export interface VueTelInputDowndownOption {
    disabledDialCode: boolean
}

export interface VueTelInputInputOption {
    showDialCode: boolean
}

export interface VueTelInputComponent extends DefineComponent<VueTelInputProps> {
    install: (app: App) => void
}

declare module 'vue' {
    export interface GlobalComponents {
        VueTelInput: VueTelInputComponent
    }
}
