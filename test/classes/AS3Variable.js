require('../globals');


describe('AS3Variable Class', function () {
  it('should exist', function () {
    expect(Packages['com.mcleodgaming.as3js.types.AS3Variable']).to.exist;
  });

  it('should instantiate with proper defaults', function () {
    var AS3Variable = Packages['com.mcleodgaming.as3js.types.AS3Variable'];

    console.info(AS3Variable.toString());

    var instance = new AS3Variable();
    
    expect(instance.name).to.be.null;
    expect(instance.type).to.equal('*');
    expect(instance.subType).to.be.null;
    expect(instance.value).to.be.null;
    expect(instance.encapsulation).to.equal('public');
    expect(instance.isStatic).to.be.false;
  });
});