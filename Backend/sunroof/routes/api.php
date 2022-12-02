<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/store-address', [App\Http\Controllers\UserDetailsController::class, 'storeAddress']);
Route::post('/calculate', [App\Http\Controllers\UserDetailsController::class, 'calculate']);
Route::post('/store-details', [App\Http\Controllers\UserDetailsController::class, 'storeDetails']);
Route::post('/store-location', [App\Http\Controllers\UserDetailsController::class, 'storeLocation']);
Route::post('/store-property', [App\Http\Controllers\UserDetailsController::class, 'storeProperty']);
Route::post('/store-family', [App\Http\Controllers\UserDetailsController::class, 'storeFamily']);
Route::post('/store-creditscore', [App\Http\Controllers\UserDetailsController::class, 'storeCreditScore']);
Route::post('/store-deadline', [App\Http\Controllers\UserDetailsController::class, 'storeDeadLine']);
Route::post('/store-date', [App\Http\Controllers\UserDetailsController::class, 'storeDate']);
Route::post('/store-time', [App\Http\Controllers\UserDetailsController::class, 'storeTime']);
Route::post('/confirm', [App\Http\Controllers\UserDetailsController::class, 'confirmDetails']);
Route::post('/upload-bills', [App\Http\Controllers\UserDetailsController::class, 'storeBills']);