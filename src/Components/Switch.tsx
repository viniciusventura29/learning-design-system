import * as SwitchPrimitive from '@radix-ui/react-switch';

export interface SwitchProps {}

export function Switch(props:SwitchProps){
  return(
  <SwitchPrimitive.Root className='w-10 h-6 bg-black rounded-full '>
    <SwitchPrimitive.Thumb className='w-full h-full bg-gray-100 rounded-full translate-x-3' />
  </SwitchPrimitive.Root>
  )
}