import Title from "./Title"

function SectionBlock(props) {
  return (
    <div className="section-box">
      <Title title={props.title} subtitle={props.subtitle} />
      {props.children}
    </div>
  )
}

export default SectionBlock