function count_yes_and_no()
         {
             let counter_for_yes = 0;
             let counter_for_no = 0;
             let all_radios = document.querySelectorAll("input");
             for(let i=0 ; i<all_radios.length ; i++)
             {
                 if(all_radios[i].checked && all_radios[i].value == "yes")
                 {
                     counter_for_yes++;
                 }
                 else if(all_radios[i].checked && all_radios[i].value == "no")
                 {
                     counter_for_no++;
                 }
             }
             alert(`Yes = ${counter_for_yes} No = ${counter_for_no}` );
         }