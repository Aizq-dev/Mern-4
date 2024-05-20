/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "../components/Main/Main";
import CardTitle from "../components/Main/Cards/CardTitle";
import Title from "../components/Main/title";
import { cardContain } from "../components/Main/Cards/CardsContain";
import Card from "../components/Main/Cards/Card";
import { primary, secundary, tertiary } from "../components/ui/colors";
import { ReviewDiv } from "../components/Main/ReviewDiv";
import { ToCatalogo } from "../components/Main/ToCatalogo";

   

describe("Main", () => {
  test("Should there are the right number of images in this case 4", () => {
    render(<Main />);
    const images = screen.getAllByRole("img");
    expect(images === 4);
  });
});
describe("CardTitle", () => {
  test("The title card should has the rigth elements ", () => {
    render(<CardTitle />);
    expect(screen.getByRole("heading", { level: 1 }));
    expect(screen.getByTestId("p1"));
    expect(screen.getByTestId("p2"));
    expect(screen.getByRole("button"));
    expect(screen.getByTestId("p-review"));
    expect(screen.getByTestId("author"));
    expect(screen.getByRole("img"));
  });
  test("The title card should has a H1 customized", () => {
    render(<CardTitle />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Pistacchio - Deliciosa bollería saludable"
    );
  });
  test("All the 'p' contain the reight text and the author is right too", () => {
    render(<CardTitle />);
    expect(screen.getByTestId("p1")).toHaveTextContent(
      "Disfruta de brownies saludables para darte un capricho sin romper la dieta.¡Pedido a domicilio o para recoger!"
    );
    expect(screen.getByTestId("p2")).toHaveTextContent(
      "⭐⭐⭐⭐⭐ | Fitness | Saludable"
    );
    expect(screen.getByTestId("p-review")).toHaveTextContent(
      '"¡Deliciosos y saludables a la vez!"'
    );
    expect(screen.getByTestId("author")).toHaveTextContent("Diego Abril");
  });
  test("The button contain right text", () => {
    render(<CardTitle />);
    expect(screen.getByRole("button")).toHaveTextContent("Ver Catálogo");
  });
  test("The button has cursor:pointer", () => {
    render(<CardTitle />);
    expect(screen.getByRole("button")).toHaveStyle("cursor: pointer");
  });
  test("change color on hover", () => {
    render(<CardTitle />);
    expect(screen.getByRole("button"));

    userEvent.unhover(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveStyle(
      `background-color: ${tertiary}`
    );
  });

  test("The image contain the right alt text ", () => {
    render(<CardTitle />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Imagen Presentación"
    );
  });
});

describe("titleText", () => {
  test("Title contain a H1 and a text, both with color-text. green and right text", () => {
    render(<Title />);
    expect(screen.getByRole("heading", { level: 1 }))
      .toHaveTextContent("Bolleria saludable a tu alcance")
      .toHaveStyle(`color:${primary}`);
    expect(
      screen.getByText(
        "Deliciosa bolleria sin culpa para los amantes del fitness"
      )
    ).toHaveStyle(`color:${primary}`);
  });
});
describe("Cards", () => {
  test("Cards render the elements", () => {
    render(<Main />);
    waitFor(() =>
      cardContain.forEach((card) => {
        expect(screen.getByText(card.title)).toBeInTheDocument();
        expect(screen.getByText(card.text)).toBeInTheDocument();
        expect(screen.getByRole(card.img)).toBeInTheDocument();
        expect(screen.getByAltText(card.alt)).toBeInTheDocument();
      })
    );
  });
});

describe("ReviewDiv", () => {
  test("renders the review with correct styles", () => {
    const title = '"Pistacchio ha cambiado mi forma de disfrutar de un dulce."';
    const name = "Flor Abril.";
    const backgroundColor = primary;
    const color = "rgb(255,255,255)";

    render(
      <ReviewDiv
        title={title}
        name={name}
        backgroundColor={backgroundColor}
        color={color}
      />
    );
    // Verifica que el título se renderiza correctamente
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle(`color:${color}`);

    // Verifica que el nombre se renderiza correctamente
    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle(`color:${color}`);

    // Verifica que el contenedor tiene el background color correcto
    const reviewDiv = titleElement.closest("div");
    expect(reviewDiv).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
describe("ToCatalogo", () => {
  test("renders the ToCatalogo component with correct styles", () => {
    const title = "Prueba nuestra bolleria.";
    const text =
      "“Qué increíble descubrimiento. La comida de Pistacchio es simplemente deliciosa y perfecta para cuidar mi dieta.” - Adrian Izquierdo.";
    const button = "Ver Catálogo";
    const background = primary;

    render(
      <ToCatalogo
        title={title}
        text={text}
        button={button}
        background={background}
      />
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();

    const buttonElement = screen.getByText(button);
    expect(buttonElement).toBeInTheDocument();
    userEvent.hover(buttonElement)
    expect(buttonElement).toHaveStyle(`background-color: ${tertiary}`);
   
  });
});
