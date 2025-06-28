interface IHTPCLassifierResult {
  predicted_class: "house" | "tree" | "person";
  confidence: number;
  //probabilities: Probabilities;
}

type Probabilities = {
  house: number;
  person: number;
  tree: number;
};

export default IHTPCLassifierResult;
