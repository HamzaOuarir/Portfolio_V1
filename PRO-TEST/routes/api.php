<?php

use App\Http\Controllers\CertDepCont;
use App\Http\Controllers\MailCont;
use Illuminate\Http\Request;
use App\Http\Controllers\SkillCont;
use App\Http\Controllers\ProjectCont;
use App\Http\Controllers\ToolCont;
use App\Http\Controllers\WorkEXPCont;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('projects',[ProjectCont::class,'index']);
Route::get('skills',[SkillCont::class,'index']);
Route::get('Depelo',[CertDepCont::class,'index']);

Route::get('WorkEXP',[WorkEXPCont::class,'index']);



Route::post('sendM',[MailCont::class,'sendMail']);
Route::post('skills',[SkillCont::class,'addSkill']);
Route::post('projects',[ProjectCont::class,'addAroject']);
Route::post('Tools',[ToolCont::class,'addTool']);
Route::post('Depelo',[CertDepCont::class,'addDep']);
Route::post('WorkEXP',[WorkEXPCont::class,'AddWork']);


Route::delete('projects/{id}',[ProjectCont::class,'delProject']);

Route::delete('WorkEXP/{id}',[WorkEXPCont::class,'delWork']);

Route::delete('Depelo/{id}',[CertDepCont::class,'delDeplo']);
Route::delete('skills/{id}',[SkillCont::class,'delSkill']);
