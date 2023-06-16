import React from 'react'
import { useTranslation } from 'react-i18next'
import { SLangSelect } from './styles/languageselector.styles'

const LanguageSelector = () => {
	type langs = {
		[key:string]:{[key:string]:string}
	}
	const lngs:langs= {
		ru: { nativeName: 'Russian' },
		en: { nativeName: 'English' }
	  };
	  const { i18n } = useTranslation();
  return (
	<SLangSelect onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>i18n.changeLanguage(e.target.value)} value={i18n.language}>
		{Object.keys(lngs).map(val=><option key={val} value={val}>{lngs[val].nativeName}</option>)}
	</SLangSelect>
  )
}

export default LanguageSelector