
function _F(t){
	return(
		t>0.008856?
		Math.pow(t, 0.333333):
		(903.296296*t+16.0)*0.008620 // 903.296296 = (29/3)^3
		);
}
function RGBtoXYZ(r, g, b){
	r=r*0.00392156;
	g=g*0.00392156;
	b=b*0.00392156;
	
	var x = 0.412453*r + 0.357580*g + 0.180423*b;
	var y = 0.212671*r + 0.715160*g + 0.072169*b;
	var z = 0.019334*r + 0.119193*g + 0.950227*b;
	return [x,y,z];
}
function XYZtoLAB(xyz){
	var xn=1.01965902;
	var yn=1.0;
	var zn=0.84584478;

	var _F_y_yn = _F(xyz[1]*yn);
	return [116*_F_y_yn-16, 500*(_F(xyz[0]*xn) - _F_y_yn), 200*(_F_y_yn  - _F(xyz[2]*zn))];
}

function RGBtoLAB(r,g,b){
	var xyz = RGBtoXYZ(r,g,b)
	return XYZtoLAB(xyz);
}
