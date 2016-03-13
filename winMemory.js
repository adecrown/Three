function wiser()
{
  var svg5 = btnCurrentPos[0].position;
  var svg6 = btnCurrentPos[1].position;
  var svg7 = btnCurrentPos[2].position;

  if(

    ((svg5 == "position4"||svg6 == "position4"||svg7 == "position4") && (svg5 == "position5"||svg6 == "position5"||svg7 == "position5"))
    ||
    ((svg5 == "position6"||svg6 == "position6"||svg7 == "position6") && (svg5 == "position5"||svg6 == "position5"||svg7 == "position5"))
    ||
    ((svg5 == "position4"||svg6 == "position4"||svg7 == "position4") && (svg5 == "position6"||svg6 == "position6"||svg7 == "position6"))
  )
  {
    if(position6 == "free")
    {
      if((svg5 == "position3"||svg6 == "position3"||svg7 == "position3") || (svg5 == "position9"||svg6 == "position9"||svg7 == "position9"))
      {
        if(svg5 !="position6" && svg6!="position6")
        {
          pos = "svg_7";
        }
        else if (  svg5 !="position6" && svg7!="position6")
        {
          pos = "svg_6"
        }
        else if (svg6 !="position6" && svg7!="position6") {
          pos = "svg_5"
        }

        return "svg_19";
      }
      else
      {
        return false;
      }
    }
    else if (position4 == "free")
    {
      if((svg5 == "position1"||svg6 == "position1"||svg7 == "position1") || (svg5 == "position7"||svg6 == "position7"||svg7 == "position7"))
      {
        return "svg_17";
      }
      else
      {
        return false;
      }
    }
    else if (position5 == "free")
    {
      if((svg5 == "position1"||svg6 == "position1"||svg7 == "position1")
      ||(svg5 == "position2"||svg6 == "position2"||svg7 == "position2")
      ||(svg5 == "position3"||svg6 == "position3"||svg7 == "position3")
      ||(svg5 == "position7"||svg6 == "position7"||svg7 == "position7")
      ||(svg5 == "position8"||svg6 == "position8"||svg7 == "position8")
      ||(svg5 == "position9"||svg6 == "position9"||svg7 == "position9"))
      {
        return "svg_16";
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  }
  else
  {
    return false;
  }

}
