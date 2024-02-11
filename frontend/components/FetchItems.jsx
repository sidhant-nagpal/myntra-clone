import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  // const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.currentlyFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items));
        dispatch(fetchStatusActions.currentlyFetchingFinished());
        dispatch(fetchStatusActions.setFetchDone());
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};

export default FetchItems;
