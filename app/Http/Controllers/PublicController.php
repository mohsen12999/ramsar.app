<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
    //
    public function index()
    {
        // $authors = User::author_user()->get();
        return response()->json([
            // 'genres' => $genres,
            // 'books' => $books,
            // 'chapters' => $chapters,
            // 'subjects' => $subjects,
            // 'posts' => $posts,
            // 'authors' => $authors,

            // 'popBooks' => $popBooks,
            // 'newBooks' => $newBooks,
            // 'bestAuthors' => $bestAuthors,
            // 'bestGenres' => $bestGenres,
            // 'latestPosts' => $latestPosts,

            'success' => true
        ], 200);
    }
}
