import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	
	let title: String;
	let question: String;
	let levelNumber: number;

	switch (params.level) {
		case "2018A":
			title = "2018 CSA FRQ 3A";
			question = `
This question involves reasoning about arrays of integers. You will write two static methods, both of which are in a class named ArrayTester.

\`\`\`
public class ArrayTester { 
    /* 
    Returns an array containing the elements of column c of arr2D in the same order as they appear in arr2D. 
    Precondition: c is a valid column index in arr2D. 
    Postcondition: arr2D is unchanged. 
    */ 
    public static int [] getColumn (int [1 [] arr2D, int c) 
    { /* Your code goes here */ } 

    /*
    Returns true if and only if every value in arr1 appears in arr2. 
    Precondition: arr1 and arr2 have the same length. • Postcondition: arr1 and arr2 are unchanged.
    */ 
    public static boolean hasAllValues (int [] arr1, int [] arr2) 
    { /* implementation not shown */ }

    // Returns true if arr contains any duplicate values; false otherwise. 
    public static boolean containsDuplicates (int [] arr) 
    { /* implementation not shown */ }

} 
\`\`\`
        
Write a static method getColumn, which returns a one-dimensional array containing the elements of a single column in a two-dimensional array. The elements in the returned array should be in the same order as they appear in the given column. The notation arr2D [r] [c] represents the array element at row r and column c. 
The following code segment initializes an array and calls the getColumn method. 

\`\`\`
int[][] arr2D = { { 0, 1, 2 } , { 3, 4, 5 } , { 6, 7, 8 } , { 9, 5, 3 } }; 
int[] result = ArrayTester.getColumn (arr2D, 1)
\`\`\`

When the code segment has completed execution, the variable result will have the following contents: {1, 4, 7, 5} 

\`\`\`
public static int[] getColumn (int[] arr2D, int c) {

    // YOUR CODE IS HERE

}
\`\`\`
			`;
			levelNumber = 0;
			break;
		case "2018B":
			title = "2018 CSA FRQ 3B";
			question = `This question involves reasoning about arrays of integers. You will write two static methods, both of which are in a class named ArrayTester.

			public class ArrayTester { 
			/* 
			Returns an array containing the elements of column c of arr2D in the same order as they appear in arr2D. 
			Precondition: c is a valid column index in arr2D. 
			Postcondition: arr2D is unchanged. 
			*/ 
			public static int [] getColumn (int [1 [] arr2D, int c) 
			{ /* implementation not shown */ } 
			
			/*
			Returns true if and only if every value in arr1 appears in arr2. 
			Precondition: arr1 and arr2 have the same length. • Postcondition: arr1 and arr2 are unchanged.
				*/ 
			public static boolean hasAllValues (int [] arr1, int [] arr2) 
			{ /* implementation not shown */ }
			
			// Returns true if arr contains any duplicate values; false otherwise. 
			public static boolean containsDuplicates (int [] arr) 
			{ /* implementation not shown */ }
			
			/*
			Returns true if square is a Latin square as described in part (b); false otherwise. Precondition: square has an equal number of rows and columns. square has at least one row. 
			*/ 
			public static boolean isLatin (int [1 [] square) 
			{ /* Your code goes here */ } 
			} 
			
			Write the static method isLatin, which returns true if a given two-dimensional square array is a Latin square, and otherwise, returns false. A two-dimensional square array of integers is a Latin square if the following conditions are true. 
			- The first row has no duplicate values.
			- All values in the first row of the square appear in each row of the square. 
			- All values in the first row of the square appear in each column of the square. 
			Feel free to use functions defined in the ArrayTester class to help you
			
			
			public static boolean isLatin (int[] square) {
			
			CODE TEXTBOX
			
			}				
			`;
			levelNumber = 1;
			break;
		case "2017A":
			title = "2017 CSA FRQ 4A";
			question = `This question involves reasoning about a two-dimensional (2D) array of integers. You will write two static methods, both of which are in a single enclosing class named Successors (not shown). These methods process a 2D integer array that contains consecutive values. Each of these integers may be in any position in the 2D integer array. For example, the following 2D integer array with 3 rows and 4 columns contains the integers 5 through 16, inclusive. 

			|  0   1  2   3
		  ------------------
		  0 | 15  5  9  10
		  1 | 12 16 11 6
		  2 | 14  8  13 7
		  
		  The following Position class is used to represent positions in the integer array. The notation (r, c) will be used to refer to a Position object with row r and column c. 
		  
		  public class Position { 
		   
		  /** Constructs a Position object with row r and column c. */ 
		  public Position(int r, int c) 
		  { / * implementation not shown * / }
		  
		  } 
		  
		  Write a static method findPosition that takes an integer value and a 2D integer array and returns the position of the integer in the given 2D integer array. If the integer is not an element of the 2D integer array, the method returns null.
		  For example, assume that array arr is the 2D integer array shown at the beginning of the question. 
		  - The call findPosition(8, arr) would return the Position object (2,1) because the value 8 appears in art at row 2 and column 1.
		  - The call findPosition(17, arr) would return null because the value 17 does not appear in arr. 
		  
		  
		  public static Position findPosition(int num, int[][] intArr) {
		  
		  USER CODE GOES HERE
		  
		  }					  
			`;
			levelNumber = 2;
			break;
		case "2017B":
			title = "2017 CSA FRQ 4B";
			question = `This question involves reasoning about a two-dimensional (2D) array of integers. You will write two static methods, both of which are in a single enclosing class named Successors (not shown). These methods process a 2D integer array that contains consecutive values. Each of these integers may be in any position in the 2D integer array. For example, the following 2D integer array with 3 rows and 4 columns contains the integers 5 through 16, inclusive. 

			|  0   1  2   3
		  ------------------
		  0 | 15  5  9  10
		  1 | 12 16 11 6
		  2 | 14  8  13 7
		  
		  The following Position class is used to represent positions in the integer array. The notation (r, c) will be used to refer to a Position object with row r and column c. 
		  
		  public class Position { 
		   
		  /** Constructs a Position object with row r and column c. */ 
		  public Position(int r, int c) 
		  { / * implementation not shown * / }
		  
		  } 
		  
		  Write a static method getSuccessorArray that returns a 2D successor array of positions created from a given 2D integer array. The successor of an integer value is the integer that is one greater than that value. For example, the successor of 8 is 9. A 2D successor array shows the position of the successor of each element in a given 2D integer array. The 2D successor array has the same dimensions as the given 2D integer array. Each element in the 2D successor array is the position (row, column) of the corresponding 2D integer array element's successor. The largest element in the 2D integer array does not have a successor in the 2D integer array, so its corresponding position in the 2D successor array is null. The following diagram shows a 2D integer array and its corresponding 2D successor array. To illustrate the successor relationship, the values 8 and 9 in the 2D integer array are shaded. In the 2D successor array, the shaded element shows that the position of the successor of 8 is ( 0 , 2 ) in the 2D integer array. The largest value in the 2D integer array is 16, so its corresponding element in the 2D successor array is null. 
		  
		  Example Array: 
		  
			|  0   1  2   3
		  ------------------
		  0 | 15  5  9  10
		  1 | 12 16 11 6
		  2 | 14  8  13 7
		  
		  Successor Array:
		  
			|  0        1      2       3
		  ----------------------------------
		  0 | (1,1)  (1,3) (0,3) (1,2)
		  1 | (1,2)  null   (1,0) (2,3)
		  2 | (0,0)  (0,2)  (2,0) (2,1)
		  
		  
		  public static Position[][] getSuccessorArray(int[][] intArr) {
		  
		  USER CODE HERE
		  
		  }						  
			`;
			levelNumber = 3;
			break;
		case "2016A":
			title = "2016 CSA FRQ A";
			question = `A crossword puzzle grid is a two-dimensional rectangular array of black and white squares. Some of the squares are labeled with a positive number according to the crossword labeling rule.

			The crossword labeling rule identities squares to be labeled with a positive number as follows.
			A square is labeled with a positive number if and only if
			the square is white and
			the square does not have a white square immediately above it, or it does not have a white square immediately to its left, or both.
			
			The squares identified by these criteria are labeled with consecutive numbers in row-major order. starting at 1.
			
			
			This question uses two classes, a Square class that represents an individual square in the puzzle and a Crossword class that represents a crossword puzzle grid. A partial declaration of the Square class is shown below.
			
			public class Square
			{
			/** Constructs one square of a crossword puzzle grid.
			* Postcondition:
			* - The square is black if and only if isBlack is true.
			* - The square has number num.
			* /
			public Square (boolean isBlack, int num)
			{
			/* implementation not shown * /
			}
			/ There may be instance variables, constructors, and methods that are not shown.
			}
			
			A partial declaration of the Crossword class is shown below. You will implement one method and the constructor in the Crossword class.
			
			public class Crossword
			/** Each element is a Square object with a color (black or white and a number.
			* puzzle [r] [c] represents the square in row r, column c.
			* There is at least one row in the puzzle.
			* /
			private Square[][] puzzle;
			
			/** Constructs a crossword puzzle grid.
			* Precondition: There is at least one row in blackSquares.
			* Postcondition:
			* - The crossword puzzle grid has the same dimensions as blackSquares.
			* - The Square object at row r, column c in the crossword puzzle grid is black if and only if blackSquares [r] [c] is true.
			* - The squares in the puzzle are labeled according to the crossword labeling rule.
			* /
			public Crossword (boolean [] [] blackSquares)
			{
			/ * to be implemented in part (b) * /
			}
			
			/** Returns true if the square at row r, column c should be labeled with a positive number;
			* false otherwise.
			* The square at row r, column c is black if and only if blackSquares [r] [c] is true.
			* Precondition: r and c are valid indexes in blackSquares.
			* /
			private boolean toBeLabeled (int r, int c, boolean [I [I blacksquares)
			{
			/* to be implemented in part (a) * /
			}
			/ / There may be instance variables, constructors, and methods that are not shown.
			}
			
			Write the Crossword method toBeLabeled. The method returns true if the square indexed by row r, column c in a crossword puzzle grid should be labeled with a positive number according to the crossword labeling rule; otherwise it returns false. The parameter blackSquares indicates which squares in the crossword puzzle grid are black.
			
			private boolean toBeLabeled (int r, int c, boolean [I [I blacksquares)
			{
			USER CODE HERE
			}
							
			`;
			levelNumber = 4;
			break;
		case "2016B":
			title = "2016 CSA FRQ B";
			question = `A crossword puzzle grid is a two-dimensional rectangular array of black and white squares. Some of the squares are labeled with a positive number according to the crossword labeling rule.

			The crossword labeling rule identities squares to be labeled with a positive number as follows.
			A square is labeled with a positive number if and only if
			the square is white and
			the square does not have a white square immediately above it, or it does not have a white square immediately to its left, or both.
			
			The squares identified by these criteria are labeled with consecutive numbers in row-major order. starting at 1.
			
			
			This question uses two classes, a Square class that represents an individual square in the puzzle and a Crossword class that represents a crossword puzzle grid. A partial declaration of the Square class is shown below.
			
			public class Square
			{
			/** Constructs one square of a crossword puzzle grid.
			* Postcondition:
			* - The square is black if and only if isBlack is true.
			* - The square has number num.
			* /
			public Square (boolean isBlack, int num)
			{
			/* implementation not shown * /
			}
			/ There may be instance variables, constructors, and methods that are not shown.
			}
			
			A partial declaration of the Crossword class is shown below. You will implement one method and the constructor in the Crossword class.
			
			public class Crossword
			/** Each element is a Square object with a color (black or white and a number.
			* puzzle [r] [c] represents the square in row r, column c.
			* There is at least one row in the puzzle.
			* /
			private Square[][] puzzle;
			
			/** Constructs a crossword puzzle grid.
			* Precondition: There is at least one row in blackSquares.
			* Postcondition:
			* - The crossword puzzle grid has the same dimensions as blackSquares.
			* - The Square object at row r, column c in the crossword puzzle grid is black if and only if blackSquares [r] [c] is true.
			* - The squares in the puzzle are labeled according to the crossword labeling rule.
			* /
			public Crossword (boolean [] [] blackSquares)
			{
			/ * to be implemented in part (b) * /
			}
			
			/** Returns true if the square at row r, column c should be labeled with a positive number;
			* false otherwise.
			* The square at row r, column c is black if and only if blackSquares [r] [c] is true.
			* Precondition: r and c are valid indexes in blackSquares.
			* /
			private boolean toBeLabeled (int r, int c, boolean [I [I blacksquares)
			{
			/* to be implemented in part (a) * /
			}
			/ / There may be instance variables, constructors, and methods that are not shown.
			}
			
			Write the Crossword constructor. The constructor should initialize the crossword puzzle grid to have the same dimensions as the parameter blackSquares. Each element of the puzzle grid should be initialized with a reference to a Square object with the appropriate color and number. The number is positive if the square is labeled and 0 if the square is not labeled.
			
			public Crossword(boolean[][] blackSquares) {
				USER CODE HERE
			}							
			`;
			levelNumber = 5;
			break;
		case "extra":
			title = "Extra Credit";
			question = `Create a method that returns the highest sum of any row or column in a 2d array. For example, if the highest sum of a row was 26 but the highest sum of a column was 30, the method would return 30.

			public static int highestSum(int[][] arr) {
					USER CODE HERE
				}							
			`;
			levelNumber = 6;
			break;
		default:
			throw error(404, 'Not found');
	}
	return {
		title: title,
		question: question,
		levelNumber: levelNumber
	};
}