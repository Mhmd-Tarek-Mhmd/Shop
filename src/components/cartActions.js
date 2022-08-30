import { useState, useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { useUniqueID } from "../hooks";

import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Counter from "./counter";

import {
  addCartItem,
  removeCartItem,
  resetCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
} from "../store/actions";

// [1] Add
export function AddCart({ product, form }) {
  const id = useUniqueID();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = +e.target[`counter-${id}`].value;

    dispatch(addCartItem(Object.assign({}, product, { quantity })));

    setIsAdded(true);
  };

  const add = () => {
    setIsAdded(true);
    dispatch(addCartItem(Object.assign({}, product, { quantity: 1 })));
  };

  useEffect(() => {
    setIsAdded(Boolean(cart.find((item) => item?.id === product.id)));
  }, []);

  return form ? (
    <Toolbar
      disableGutters
      component="form"
      onSubmit={handleSubmit}
      sx={{ gap: 1 }}
    >
      <Counter id={id} isDisabled={isAdded} prodID={product.id} />
      <Button
        type="submit"
        variant="contained"
        sx={{ flexGrow: 1 }}
        disabled={isAdded}
      >
        Add to cart
      </Button>
    </Toolbar>
  ) : (
    <Tooltip title="Add to cart" arrow>
      <IconButton disabled={isAdded} onClick={add}>
        <AddShoppingCartIcon />
      </IconButton>
    </Tooltip>
  );
}

// [2] Quantity
export function QuantityCounter({ id }) {
  const dispatch = useDispatch();

  return (
    <Counter
      increaseCb={() => dispatch(increaseQuantity(id))}
      decreaseCb={() => dispatch(decreaseQuantity(id))}
      changeCb={(quantity) => dispatch(setQuantity({ id, quantity }))}
    />
  );
}

// [3] Remove
export function RemoveCart({ id }) {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCartItem(id));
  };

  return (
    <Tooltip title="Remove" arrow>
      <IconButton aria-label="Remove this item from cart" onClick={remove}>
        <ClearIcon />
      </IconButton>
    </Tooltip>
  );
}

// [4] Reset
export function ResetCart(props) {
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(resetCart());
  };

  return (
    <Button variant="outlined" onClick={reset} {...props}>
      Clear all
    </Button>
  );
}
