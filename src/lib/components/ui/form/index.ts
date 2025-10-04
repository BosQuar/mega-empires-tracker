import * as RadioGroupComp from '$lib/components/ui/radio-group';
import * as SelectComp from '$lib/components/ui/select';
import { Form as FormPrimitive, getFormField } from 'formsnap';
import type { Writable } from 'svelte/store';
import Button from './form-button.svelte';
import Checkbox from './form-checkbox.svelte';
import Description from './form-description.svelte';
import Input from './form-input.svelte';
import Item from './form-item.svelte';
import Label from './form-label.svelte';
import MultiSelectAdvances from './form-multi-select-advances.svelte';
import MultiSelectCalamities from './form-multi-select-calamities.svelte';
import NativeSelect from './form-native-select.svelte';
import RadioGroup from './form-radio-group.svelte';
import SelectTrigger from './form-select-trigger.svelte';
import Select from './form-select.svelte';
import Switch from './form-switch.svelte';
import Textarea from './form-textarea.svelte';
import Validation from './form-validation.svelte';

const Root = FormPrimitive.Root;
const Field = FormPrimitive.Field;
const Control = FormPrimitive.Control;
const RadioItem = RadioGroupComp.Item;
const NativeRadio = FormPrimitive.Radio;
const SelectContent = SelectComp.Content;
const SelectLabel = SelectComp.Label;
const SelectGroup = SelectComp.Group;
const SelectItem = SelectComp.Item;
const SelectSeparator = SelectComp.Separator;

export type TextareaGetFormField = Omit<ReturnType<typeof getFormField>, 'value'> & {
	value: Writable<string>;
};

export {
	Button,
	Checkbox,
	Control,
	Description,
	Field,
	Root as Form,
	Button as FormButton,
	Checkbox as FormCheckbox,
	Control as FormControl,
	Description as FormDescription,
	Field as FormField,
	Input as FormInput,
	Item as FormItem,
	Label as FormLabel,
	//
	MultiSelectAdvances as FormMultiSelectAdvances,
	MultiSelectCalamities as FormMultiSelectCalamities,
	NativeRadio as FormNativeRadio,
	NativeSelect as FormNativeSelect,
	RadioGroup as FormRadioGroup,
	RadioItem as FormRadioItem,
	Select as FormSelect,
	SelectContent as FormSelectContent,
	SelectGroup as FormSelectGroup,
	SelectItem as FormSelectItem,
	SelectLabel as FormSelectLabel,
	SelectSeparator as FormSelectSeparator,
	SelectTrigger as FormSelectTrigger,
	Switch as FormSwitch,
	Textarea as FormTextarea,
	Validation as FormValidation,
	Input,
	Item,
	Label,
	MultiSelectAdvances,
	MultiSelectCalamities,
	NativeRadio,
	NativeSelect,
	RadioGroup,
	RadioItem,
	Root,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	Switch,
	Textarea,
	Validation
};

export function useForm(arg0: {
	schema: ZodObject<
		{
			people: ZodString;
			cities: ZodString;
			astAdvance: ZodString;
			cardsCost: ZodString;
			cardsDiscount: ZodString;
			civilizationAdvances: ZodString;
			isDone: ZodBoolean;
			monumentRed: ZodString;
			monumentGreen: ZodString;
			monumentBlue: ZodString;
			monumentOrange: ZodString;
			monumentYellow: ZodString;
			writtenRecordRed: ZodString;
			writtenRecordGreen: ZodString;
			writtenRecordBlue: ZodString;
			writtenRecordOrange: ZodString;
			writtenRecordYellow: ZodString;
		},
		'strip',
		ZodTypeAny,
		{
			people: string;
			cities: string;
			astAdvance: string;
			cardsCost: string;
			cardsDiscount: string;
			civilizationAdvances: string;
			isDone: boolean;
			monumentRed: string;
			monumentGreen: string;
			monumentBlue: string;
			monumentOrange: string;
			monumentYellow: string;
			writtenRecordRed: string;
			writtenRecordGreen: string;
			writtenRecordBlue: string;
			writtenRecordOrange: string;
			writtenRecordYellow: string;
		},
		{
			people: string;
			cities: string;
			astAdvance: string;
			cardsCost: string;
			cardsDiscount: string;
			civilizationAdvances: string;
			isDone: boolean;
			monumentRed: string;
			monumentGreen: string;
			monumentBlue: string;
			monumentOrange: string;
			monumentYellow: string;
			writtenRecordRed: string;
			writtenRecordGreen: string;
			writtenRecordBlue: string;
			writtenRecordOrange: string;
			writtenRecordYellow: string;
		}
	>;
	data: {
		people: string;
		cities: string;
		astAdvance: string;
		cardsCost: string;
		cardsDiscount: string;
		monumentRed: string;
		monumentGreen: string;
		monumentBlue: string;
		monumentOrange: string;
		monumentYellow: string;
		writtenRecordRed: string;
		writtenRecordGreen: string;
		writtenRecordBlue: string;
		writtenRecordOrange: string;
		writtenRecordYellow: string;
		isDone: boolean;
		civilizationAdvances: string;
	};
}) {
	throw new Error('Function not implemented.');
}
