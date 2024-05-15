import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FeatHeightBox from '../components/FeatHeightBox'
import { 
  Step, 
  StepLabel, 
  Stepper, 
  Avatar,
  useTheme,
  Stack,
  Button
} from '@mui/material'
import Terms from '../components/Signup/Terms'
import AccountInfo from '../components/Signup/AccountInfo'

const steps = [
  '약관 동의',
  '계정 정보 입력',
  '기본 정보 입력',
  '스타일 설정'
]

const Signup = () => {

  const { 
    register, 
    handleSubmit,
    control,
    watch,
    formState: {isSubmitting, errors, isValid},
  } = useForm()

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => setActiveStep(activeStep + 1)
  const handlePrev = () => setActiveStep(activeStep - 1)
  


  return (
    <FeatHeightBox>
      <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'} spacing={2} height={'100%'}>
        {/* Top Steeper */}
        <Stepper activeStep={activeStep} alternativeLabel connector={null} sx={{ width: '70%',alignItems: 'center'}}>
          {steps.map((step) => {
            return (
              <Step key={step} >
                <StepLabel StepIconComponent={MyStep}>{step}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        
        {/* Mid body */}
        {activeStep === 0 && 
          <Terms></Terms>
        }
        {activeStep === 1 && 
          <AccountInfo
            register={register}
            errors={errors}
            control={control}
            watch={watch}
            isValid={isValid}
          ></AccountInfo>
        }

        
        {/* Bottom Buttons */}
        <Stack direction={'row'} spacing={2}>
          {(activeStep !== 0) && 
          <Button 
            variant='contained' 
            disableElevation
            sx={{width :'15rem'}}
            onClick={handlePrev}
          >이전</Button>}
          {(activeStep < 3) && 
          <Button 
            variant='contained'
            disableElevation
            sx={{width :'15rem'}}
            onClick={handleNext} 
            color='secondary'
          >다음</Button>}
          {(activeStep === 3) && 
          <Button 
            variant='contained'
            disableElevation
            sx={{width :'15rem'}}
            color='secondary'
          >완료</Button>}
        </Stack>


      </Stack>


    </FeatHeightBox>
  )
}
// backgroundColor: theme.palette.secondary.main,
const MyStep = (props) => {
  const theme = useTheme()

  return (
    <Avatar 
      sx={{
        fontSize : '2.4rem',
        backgroundColor: props.active ? theme.palette.secondary.main : 'black',
        width: props.active ? '4.8rem' : '3.6rem',
        height: props.active ? '4.8rem' : '3.6rem',
      }}
    >{props.icon}</Avatar>
  )
}






export default Signup