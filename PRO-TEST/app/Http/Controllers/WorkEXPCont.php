<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkExpReq;
use App\Models\WorkExp;
use Illuminate\Http\Request;

class WorkEXPCont extends Controller
{
    //
    public function index(){
        return WorkExp::all();
    }


    public function AddWork(WorkExpReq $req){
        $skl=new WorkExp();


        $skl->CmpName = $req->CmpName;
        $skl->period =$req->Period ;
        $skl->PostName=$req->PostName;

        $skl->save();
        return $skl;
    }


    public function delWork($id){
        $w=WorkExp::find($id);
        $w->delete();
        return ['msg'=>$w->CmpName.' has been deleted!'];}










}
