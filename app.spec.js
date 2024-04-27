describe('Fundamentals Part 1', () => {
  it('variable js should', () => {
    expect(js).toEqual('amazing');
  });

  it('variable firstName should be', () => {
    expect(firstName).toEqual('Matilda');
  });

  it('variable jonas_matilda should', () => {
    expect(jonas_matilda).toEqual('JM');
  });

  it('variable $function should', () => {
    expect($function).toEqual(27);
  });

  it('variable person should', () => {
    expect(person).toEqual('jonas');
  });

  it('variable PI should', () => {
    expect(PI).toEqual(3.1415);
  });

  it('variable myFirstJob should', () => {
    expect(myFirstJob).toEqual('Coder');
  });

  it('variable myCurrentJob should', () => {
    expect(myCurrentJob).toEqual('Teacher');
  });

  it('variable job1 should', () => {
    expect(job1).toEqual('programmer');
  });

  it('variable job2 should', () => {
    expect(job2).toEqual('teacher');
  });

  it('variable javascriptIsFun should', () => {
    expect(javaScriptIsFun).toBeTrue;
  });

  it('variable javascriptIsFun2 should', () => {
    expect(javascriptIsFun2).toEqual('YES!');
  });

  it('variable year should', () => {
    expect(year).toEqual(1991);
  });

  it('variable birthYear should', () => {
    expect(birthYear).toEqual(1991);
  });

  it('variable lastName should', () => {
    expect(lastName).toEqual('Schmedtmann');
  });

  it('variable now should', () => {
    expect(now).toEqual(2037);
  });

  it('variable ageJones should', () => {
    expect(ageJones).toBeGreaterThan(ageSarah);
  });

  it('variable ageSarah should', () => {
    expect(ageSarah).toBeLessThan(ageJones);
  });

  describe('Coding Challenge', () => {
    it('variable massMark should', () => {
      expect(massMark).toBe(78);
    });

    it('variable heightMark should', () => {
      expect(heightMark).toBe(1.69);
    });

    it('variable massJohn should', () => {
      expect(massJohn).toBe(92);
    });

    it('variable heightJohn should', () => {
      expect(heightJohn).toBe(1.95);
    });

    it('variable BMIMark should', () => {
      expect(BMIMark).toEqual(27.309968138370508);
    });

    it('variable BMIJohn should', () => {
      expect(BMIJohn).toEqual(24.194608809993426);
    });

    it('varabile markHigherBMI', () => {
      expect(markHigherBMI).toBe(true);
    });
  });

  it('variable firstName3 should', () => {
    expect(firstName3).toBe('Jonas');
  });

  it('variable jonas2 should', () => {
    expect(jonas2).toContain("I'm Jonas");
  });
});
