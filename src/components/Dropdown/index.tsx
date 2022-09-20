import styles from './index.module.scss'
import reactImg from '../../assets/react.png'
import reactImgx2 from '../../assets/react@2x.png'
import reactImgx3 from '../../assets/react@3x.png'
import angularImg from '../../assets/angular.png'
import angularImgx2 from '../../assets/angular@2x.png'
import angularImgx3 from '../../assets/angular@3x.png'
import vueImg from '../../assets/react.png'
import vueImgx2 from '../../assets/vue@2x.png'
import vueImgx3 from '../../assets/vue@3x.png'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../../context/globalState'
import Font from '../Fonts'

const DropdownSelect = () => {
  const options = [
    { label: 'Angular', value: 'angular', 
      images: [angularImg, angularImgx2, angularImgx3]
    },
    { label: 'React', value: 'react',
      images: [reactImg, reactImgx2, reactImgx3]
    },
    { label: 'Vuejs', value: 'vue',
      images: [vueImg, vueImgx2, vueImgx3]  
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<String | String | any>({
    label: 'Select your news', value: 'none'
  });

  let location = useLocation()

  const { updateFilterUrl, filterUrl } = useContext(GlobalContext);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (value: any) => {
    setSelectedOption(value);
    setIsOpen(false);
    updateFilterUrl(value.value)
    console.log(selectedOption);
  }

  useEffect(() => {
    if(filterUrl) {
      console.log('haciendo filter');
      
      let optionState = options.filter(option => {
        if(option.value === filterUrl){
          return option
        }
      })

      console.log('opiton sle', optionState);
      
      setSelectedOption(optionState[0])
      console.log("data opstio  sele", selectedOption);
      
    }
  }, []);

  const Option = (
    {value, label, images, handleOptionSelect}: {value: any, label: String, images: any[], handleOptionSelect: any,}) => {
    return(
      <div onClick={()=> handleOptionSelect({ label: label, value: value, images: images })} className={styles.dropdownOption}>
        <img className={styles.dropdownOptionImg} src={images[0]} srcSet={`${images[1]}, ${images[2]}`} alt='icon option' />
        <Font classname={styles.dropdownOptionLabel} type={'text'}>
          {label}
        </Font>
      </div>
    )
  }
  
  const Dropdown = ({ images, label, value, options, isOpen, setIsOpen, handleOptionSelect }: any) => {
    console.log("data dorpdown", label, value, images);
    
    return (
      <div onClick={setIsOpen} className={styles.dropdown}>
        <div className={styles.dropdownContent}>
          { images && (<img className={styles.dropdownOptionImg} src={images[0]} srcSet={`${images[1]}, ${images[2]}`} alt='icon option' />)}
          <Font classname={styles.dropdownSelectLabel} type={'text'}>
            {label} 
          </Font>
        </div>
        {
          isOpen && (
            <div className={styles.dropdownOptions}>
              {options.map((option:any) => (
                <Option key={option.value} handleOptionSelect={handleOptionSelect} value={option.value} images={option.images} label={option.label}/>
              ))}
            </div>
          )
        }
      </div>
    );
  }

  return (
    location.pathname === '/' ? (
      <Dropdown
        options={options}
        isOpen={isOpen}
        setIsOpen={handleToggle}
        handleOptionSelect={handleOptionSelect}
        {...selectedOption}
      />
    ) : <></>
  )
}



export default DropdownSelect