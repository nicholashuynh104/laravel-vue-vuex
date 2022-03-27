<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Student;

class StudentController extends Controller
{
    public function index()
    {

        return view('student.view');
    }

    public function fetchStudentData()
    {
        $students = Student::all();
        return $students;
    }

    public function create()
    {
        $data = [
            'scope' => 'create'
        ];
        return view('student.form')->with($data);
    }

    public function store(Request $request)
    {
        $student = new Student;
        $student->name = $request->name;
        $student->class = $request->class;
        $student->section = $request->section;
        $student->email = $request->email;
        $student->save();

        return response()->json([
            'status' => 200,
            'message' => 'Student saved successfully',
        ]);
    }
}
