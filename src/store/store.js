import { init } from "@rematch/core";
import loading from "@rematch/loading";
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { news } from "./model/newsModel";
import { comments } from "./model/commentModel";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const models = {
  news,
  comments,
};

const store = init({
  models,
  plugins: [loading(), persistPlugin(persistConfig)],
});

export default store;
