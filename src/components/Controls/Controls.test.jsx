import { screen, render } from "@testing-library/react";
import Controls from "./Controls.jsx";

it("should render a dropdown with types of pokemon", async () => {
  const types = ["bug", "grass", "poison"];
  const { container } = render(
    <Controls types={types} selectedType="poison" />
  );
  const dropDown = await screen.findByText(/Filter your Pokemon!/i);
  expect(dropDown).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
