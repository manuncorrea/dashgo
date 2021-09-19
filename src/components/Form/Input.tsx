import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { 
  FormControl, 
  FormLabel, 
  Input as ChakraInut, 
  InputProps as ChakraInutProps 
} from '@chakra-ui/react';
import { FormErrorMessage } from '@chakra-ui/react';

interface InputProps extends ChakraInutProps {
  name: string;
  label?: string;
  error?: FieldError;
}

 const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, error = null, ...rest }, ref) => {
  return(
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInut
        name={name}
        id={name}
        type='password'
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{
          bgColor: 'gray.900'
        }}
        size='lg'
        ref={ref}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)