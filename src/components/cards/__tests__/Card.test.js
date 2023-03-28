import { screen, render } from "@testing-library/react";
import Card from "../Card";

const cardProps = {
  name: "Sydney",
  phone: "111-111-1111",
  email: "vajganidhanesh@gmail.com",
  image: {
    url: "https://plus.unsplash.com/premium_photo-1673461703605-0c6cc77e1a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "cat",
  },
  favoured: false,
};

test("should be a prop", () => {
  render(<Card cardProps={cardProps} />);
  const text = screen.getByText(/Sydney/i);
  expect(text).toBeInTheDocument();
});

test("should be a ", () => {});
