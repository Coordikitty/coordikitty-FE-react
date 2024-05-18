import React from 'react'
import { useState } from 'react'
import { 
  Box,
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
import BasicInfo from '../components/Signup/BasicInfo'
import { useForm, Controller, } from 'react-hook-form'
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
    getValues,
    watch,
    setValue,
    formState: {errors, isValid},
  } = useForm()

  const [activeStep, setActiveStep] = useState(0)
  const [nextValid, setNextVaild] = useState(false)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
    console.log(getValues())
  }
  const handlePrev = () => setActiveStep(activeStep - 1)
  


  return (
    <Box sx={{
      margin: '4rem 0',
      minHeight: 'calc(100vh - 20rem)',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}>
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
          <Terms setNextVaild={setNextVaild}></Terms>
        }
        {activeStep === 1 && 
          <AccountInfo 
            setNextVaild={setNextVaild}
            parentSetValue={setValue}
          ></AccountInfo>
        }
        {activeStep === 2 && 
          <BasicInfo 
            setNextVaild={setNextVaild}
            parentSetValue={setValue}
          ></BasicInfo>
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
            disabled={!nextValid}
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


    </Box>
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