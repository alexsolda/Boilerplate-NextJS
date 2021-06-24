import * as S from './styles'

export default function Main({
  title = 'React avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Ilustração de um desenvolvedor em frente a um monitor com códigos."
      />
    </S.Wrapper>
  )
}
