function getUPILink(vpa, name,)
{
  var upiLink;
  upiLink= "upi://pay?pa=" + vpa + "&pn=" + name;
  return upiLink;
}
