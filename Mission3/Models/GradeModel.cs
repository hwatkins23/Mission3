using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    public class GradeModel
    {
        // sets up getters/setters 
        // requires a range of 0-100 for the input
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100 for the Assignments")]
        public int assignments { get; set; }
 
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100 for the Group Projects")]
        public int groupProjects { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100 for the Quizzes")]
        public int quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100 for the Exams")]
        public int exams { get; set; }

        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100 for INTEX")]
        public int intex { get; set; }
    }
}
