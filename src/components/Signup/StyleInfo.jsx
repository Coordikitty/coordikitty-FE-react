import React, { useEffect } from 'react'
import { 
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { styled } from '@mui/system';
import styleInfo from '../../utils/styleInfo';
import { useForm } from 'react-hook-form'


const StyleInfo = ({setNextVaild, parentSetValue}) => {

  const {
    register,
    watch,
  } = useForm({
    defaultValues: {
      preferredStyle : []
    }
  })

  const watchField = watch('preferredStyle')
  useEffect(() => {
    console.log(watchField)
    if (watchField.length > 0) {
      parentSetValue('preferredStyle', watchField)
      setNextVaild(true)
    } else {
      setNextVaild(false)
    }
  }, [watchField, parentSetValue, setNextVaild])

  return (
    <Box width={'70%'} paddingLeft={'3rem'} display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
      {styleInfo.map((style) => {
        return (
          <ImgCheckBox
            key={style.style}
            checked={watch('preferredStyle').includes(style.style)}
            control={
              <Checkbox 
                value={style.style} 
                {...register('preferredStyle')}
                sx={{display: 'none'}}
              ></Checkbox>}
            label={<Box><img src={style.img} alt={style.style}></img></Box>}
          ></ImgCheckBox>)
      })}
    </Box>
  )
}

const ImgCheckBox = styled(FormControlLabel)((props) => {
  return {
    '& div': {
      margin: '1rem',
      boxSizing: 'border-box',
      width: '15rem',
      height: '15rem',
      border: props.checked ? `0.5rem solid ${props.theme.palette.secondary.main}` : 'none',
      padding: props.checked ? '0.5rem' : 0,
      borderRadius : '0.75rem',
      transition: '0.3s',
      
    },

    '& img': {
      width: "100%",
      height: "100%",
      borderRadius : '0.75rem',
      objectFit: 'cover',
      transition: '0.3s',
    },
  }
})


export default StyleInfo