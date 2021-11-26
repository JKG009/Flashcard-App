import HeaderContainer from "./containers/header"
import ContentContainer from "./containers/content"
import FooterContainer from "./containers/footer"
import UpdateQuestionContainer from "./containers/updateQuestion";
import { useSelected } from "./components/context/PageContext"
import { TopicProvider } from "./components/context/TopicContext"
import { CardDisplayedProvider } from "./components/context/CardDisplayedContext"

const myStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  minHeight: "400px"
}

function App() {
  const {selected} = useSelected()
  return (
    <div style={myStyle}>
        <HeaderContainer />
        <CardDisplayedProvider>
          <TopicProvider>
            {selected === "testYourself" ? 
            <ContentContainer /> 
            : 
            <UpdateQuestionContainer />
            }
            <FooterContainer />       
          </TopicProvider>
        </CardDisplayedProvider>
    </div>
  )
}

export default App;