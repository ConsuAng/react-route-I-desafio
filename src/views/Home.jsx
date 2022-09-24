import Container from "../layouts/Container";
import cake from "../assets/cake.png";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-light pb-7">
          Bienvenido a <b className="font-semibold">Happy Cake</b>
        </h1>
        <h2 className="text-2xl font-light" >El lugar de los pasteles felices</h2>
        <img src={cake} className="h-auto w-60 pt-9"/>
      </div>
    </Container>
  )
}    