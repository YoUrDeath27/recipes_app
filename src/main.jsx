import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';
import Recipe from './routes/Recipe';
import RecipesList from './routes/RecipesList';
import Recipes from './routes/Recipes';
import Root from "./routes/Root";

const searchTerm = '';

const filteredRecipes = Recipes.filter(recipe =>
  recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <RecipesList recipesData={filteredRecipes} /> },
          {
            path: ":id",
            element: <Recipe />
          }
        ],
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
