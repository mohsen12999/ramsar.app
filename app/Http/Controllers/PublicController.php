<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Facility;

class PublicController extends Controller
{
    //
    public function index()
    {
        // $authors = User::author_user()->get();
        $categories = Category::all();
        $facilities = Facility::all();

        return response()->json([
            'categories' => $categories,
            'facilities' => $facilities,

            'success' => true
        ], 200);
    }
}
