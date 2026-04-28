import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Main from "../pages/Main";

describe("Тестирование страницы Main", () => {
  
  const renderMain = () =>
    renderer.create(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

  test("Main рендерится без ошибок", () => {
    const component = renderMain();
    expect(component.toJSON()).toBeTruthy();
  });

  test("Snapshot тест Main", () => {
    const component = renderMain();
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Проверка что Main возвращает дерево", () => {
    const component = renderMain();
    const tree = component.toJSON();
    expect(tree).not.toBeNull();
  });

  test("Проверка что Main содержит дочерние элементы", () => {
    const component = renderMain();
    const tree = component.toJSON();
    expect(tree.children.length).toBeGreaterThan(0);
  });

  test("Main создаётся как объект", () => {
    const component = renderMain();
    expect(typeof component).toBe("object");
  });

});