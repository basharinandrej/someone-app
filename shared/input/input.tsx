import { TextInput, TextInputProps } from "react-native"
import {colors} from '../../styles/tokens'

export const Input = (props: TextInputProps) => {

    return <TextInput {...props} placeholderTextColor={colors.Placeholder}/>
}