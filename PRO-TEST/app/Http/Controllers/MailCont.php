<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendMsg;
use App\Mail\SupMail;
use Illuminate\Support\Facades\Mail;

class MailCont extends Controller
{
    //
    public function sendMail(SendMsg $req){

        $data = [
            'Name'=>$req->NameC,
            'Email'=>$req->EmailC,
            'Msg'=>$req->Msg,
            'Subject'=>$req->Subject,

        ];

        Mail::to('warirhamza43@gmail.com')->send(new SupMail($data));

    }
}
