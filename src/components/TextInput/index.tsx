import React, { ChangeEvent, useState } from 'react';
import { Label, Input } from 'native-base';

import { Colors } from '../../styles';
import { CustomView, CustomIcon, CustomItem, ErrorText } from './styles';

type HandleChangeType = {
  (e: ChangeEvent<Element>): void;
  <T = string | ChangeEvent<Element>>(field: T): T extends ChangeEvent<Element>
    ? void
    : (e: string | ChangeEvent<Element>) => void;
};

type HandleBlurType = {
  (e: string | React.FocusEvent<Element>): void;
  <T = string | Element>(fieldOrEvent: T): T extends string
    ? (e: Element) => void
    : void;
};

interface TextInputProps {
  name: string;
  value: string;
  handleChange: HandleChangeType;
  label?: string;
  handleBlur?: HandleBlurType;
  autoCorrect?: boolean;
  hidable?: boolean;
  cleanable?: boolean;
  handleClean?: () => void;
  maxLength?: number;
  autoFocus?: boolean;
  validationError?: string;
  touched?: boolean;
  disabled?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  handleChange,
  label,
  handleBlur = () => null,
  autoCorrect = false,
  hidable = false,
  cleanable = false,
  handleClean = () => null,
  maxLength = null,
  autoFocus = false,
  validationError = null,
  touched = false,
  disabled = false,
  autoCapitalize = 'none',
}) => {
  const [isHiddenValueVisible, setIsHiddenValueVisible] = useState(false);

  return (
    <CustomView>
      <CustomItem inlineLabel>
        {label && <Label>{label}</Label>}
        <Input
          value={value}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
          secureTextEntry={hidable && !isHiddenValueVisible}
          autoFocus={autoFocus}
          disabled={disabled}
          autoCapitalize={autoCapitalize}
        />
        {cleanable && value.length > 0 && (
          <CustomIcon
            name="close-circle"
            color={Colors.gray}
            onPress={() => handleClean()}
          />
        )}
        {hidable &&
          (isHiddenValueVisible ? (
            <CustomIcon
              name="eye-off-outline"
              onPress={() => setIsHiddenValueVisible(!isHiddenValueVisible)}
              color={Colors.gray}
            />
          ) : (
            <CustomIcon
              name="eye-outline"
              onPress={() => setIsHiddenValueVisible(!isHiddenValueVisible)}
              color={Colors.gray}
            />
          ))}
      </CustomItem>
      {touched && validationError && <ErrorText>{validationError}</ErrorText>}
    </CustomView>
  );
};

export default TextInput;
