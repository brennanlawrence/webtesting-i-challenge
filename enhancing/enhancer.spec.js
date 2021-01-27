const { success, fail, repair, get } = require("./enhancer.js");
const { TestScheduler } = require("jest");
// test away!

const emptyTrojanHorse = {
  name: "Trojan Horse",
  enhancement: 0,
  durability: 0,
};

const unenhancedButDurableTrojanHorse = {
  name: "Trojan Horse",
  enhancement: 0,
  durability: 100,
};

const emptyBobRossStatue = {
  name: "Trojan Horse",
  enhancement: 0,
  durability: 0,
};

const enhancedBobRossStatue = {
  name: "Trojan Horse",
  enhancement: 1,
  durability: 0,
};

const maxEnhancedBobRossStatue = {
  name: "Trojan Horse",
  enhancement: 20,
  durability: 0,
};

const unchangedMaxEnhancedBobRossStatue = {
  name: "Trojan Horse",
  enhancement: 20,
  durability: 0,
};

const theDavid = {
  name: "The David",
  enhancement: 14,
  durability: 10,
}

const theDavidFailure = {
  name: "The David",
  enhancement: 14,
  durability: 5,
}

const pottedPlant = {
  name: "fern",
  enhancement: 15,
  durability: 10,
}

const pottedPlantFailure = {
  name: "fern",
  enhancement: 15,
  durability: 0,
}

const toyHorse = {
  name: "toy horse",
  enhancement: 16,
  durability: 10,
}

const toyHorseFailure = {
  name: "toy horse",
  enhancement: 15,
  durability: 0,
}

//TESTS  \/  \/  \/  TESTS

describe("repair", () => {
  it("resets durability to 100", () => {
    const result = repair(emptyTrojanHorse);
    const expectedResult = unenhancedButDurableTrojanHorse;
    expect(result).toStrictEqual(expectedResult);
  });

  it("doesn't affect enhancement", () => {
    const result =repair(emptyTrojanHorse);
    const expectedResult = unenhancedButDurableTrojanHorse;
    
    expect(result).toStrictEqual(expectedResult);
  });
});

describe("success", () => {
  it("Increases enhancement by 1", () => {
    const result = success({...emptyBobRossStatue});
    const expectedResult = enhancedBobRossStatue;
    
    expect(result).toStrictEqual(expectedResult);
  });

  it("Does not increase if level is 20 already", () => {
    const result = success(maxEnhancedBobRossStatue);
    const expectedResult = unchangedMaxEnhancedBobRossStatue;
    
    expect(result).toEqual(expectedResult);
  });

  it("Does not affect durablity", () => {
    const result = success({...emptyBobRossStatue});
    const expectedResult = enhancedBobRossStatue;
    
    expect(result).toEqual(expectedResult);
  });
});

describe("failure", () => {
  it("If current enhancement it 14 and durability is 10—durability becomes 5", () => {
    const result = fail({...theDavid});
    const expectedResult = theDavidFailure;
    
    expect(result).toEqual(expectedResult);
  });

  it("If current enhancement it 15 and durability is 10 — durability becomes 0", () => {
    const result = fail({...pottedPlant});
    const expectedResult = pottedPlantFailure;
    
    expect(result).toEqual(expectedResult);
  })

  it("If current enhancement it 16 enhancement becomes 15", () => {
    const result = fail({...toyHorse});
    const expectedResult = toyHorseFailure;
    
    expect(result).toEqual(expectedResult);
  })
})

/*
it("", () => {

  const result = "";
  const expectedResult = "";
  expect(result).toEqual(expectedResult);
});
*/
