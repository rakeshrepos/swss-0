<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserDetails;
class UserDetailsController extends Controller
{
    public function storeAddress(Request $request){
        $address = $request->address;
        $userDetails = new UserDetails();
        $userDetails->address = $address;
        $userDetails->save();
        return $userDetails->id;
    }

    public function calculate(Request $request){
        $data = $request->all();

        $bill = $data['bill'];
        $userId = $data['user_id'];

        $billPerDay = $bill/30;
        $billForYears = $bill*12*25;

        $electricityBill = $billForYears + ($billForYears*0.022*11);

        $recommendedSolarKWH = $billPerDay - (($billPerDay/6)*1.15);
        $recommendedSolarKWH = round($recommendedSolarKWH,2,PHP_ROUND_HALF_DOWN);

        $whole = (int)$recommendedSolarKWH;
        $fraction = $recommendedSolarKWH - $whole;

        if($fraction < 0.25 ){
            $fraction = 0;
        }else if($fraction < 0.5){
            $fraction = 0.25;
        }else if($fraction < 0.75){
            $fraction = 0.5;
        }else{
            $fraction = 0.75;
        }

        $recommendedSolarKWH = $whole + $fraction;
        $recommendedSolarKWH = $recommendedSolarKWH < 1 ? 1: $recommendedSolarKWH;

        $solarPanelsRequired = $recommendedSolarKWH*4;

        $installationCharges = (($recommendedSolarKWH-1)*4*680)+8463;
        $hiddenCharges = ($solarPanelsRequired*12)*25;
        $extendedUtility = $hiddenCharges + ($hiddenCharges*(12*0.022));
        $FTI = $installationCharges*0.26;
        $solarBill = $installationCharges+$extendedUtility-$FTI;

        $savings = $electricityBill - $solarBill;

        $carbonFootPrint = $solarPanelsRequired*0.17;
        $treeSeedings = $carbonFootPrint*16.5333;
        $homeValue = '4.10%';

        $userDetails = userDetails::find($userId);
        $userDetails->bill = $bill;
        $userDetails->savings = (int)$savings;
        $userDetails->home_value = $homeValue;
        $userDetails->tree_seedings = (int)$treeSeedings;
        $userDetails->recommendedSolarKWH = $recommendedSolarKWH;
        $userDetails->panels = $solarPanelsRequired;
        $userDetails->save();

        // return $userDetails;
        
        $output = array();

        $output['savings'] = (int)$savings;
        $output['home_value'] = $homeValue;
        $output['tree_seedings'] = (int)$treeSeedings;
        $output['recommendedSolarKWH'] = $recommendedSolarKWH;
        $output['panels'] = $solarPanelsRequired;

        return $output;
    }

    public function storeDetails(Request $request){
        $userId = $request->user_id;
        $name = $request->name;
        $email = $request->email;
        $number = $request->number;

        $userDetails = UserDetails::find($userId);
        $userDetails->name = $name;
        $userDetails->email = $request->email;
        $userDetails->number = $request->number;
        $userDetails->save();

        return $userDetails;
    }

    public function storeLocation(Request $request){
        $userId = $request->user_id;
        $appartment = $request->appartment;

        $userDetails = UserDetails::find($userId);
        $userDetails->appartment = $appartment;
        $userDetails->save();
    }

    public function storeProperty(Request $request){
        $userId = $request->user_id;
        $property = $request->property;

        $userDetails = UserDetails::find($userId);
        $userDetails->property = $property;
        $userDetails->save();

        return $userDetails;
    }

    public function storeFamily(Request $request){
        $userId = $request->user_id;
        $family = $request->family;

        $userDetails = UserDetails::find($userId);
        $userDetails->family = $family;
        $userDetails->save();

        return $userDetails;
    }

    public function storeCreditScore(Request $request){
        $userId = $request->user_id;
        $creditScore = $request->credit_score;

        $userDetails = UserDetails::find($userId);
        $userDetails->credit_score = $creditScore;
        $userDetails->save();

        return $userDetails;
    }

    public function storeDeadLine(Request $request){
        $userId = $request->user_id;
        $deadLine = $request->dead_line;

        $userDetails = UserDetails::find($userId);
        $userDetails->dead_line = $deadLine;
        $userDetails->save();

        return $userDetails;
    }

    public function storeDate(Request $request){
        $userId = $request->user_id;
        $date = $request->date;

        $userDetails = UserDetails::find($userId);
        $userDetails->date = $date;
        $userDetails->save();
    }

    public function storeTime(Request $request){
        $userId = $request->user_id;
        $region = $request->region;
        $time = $request->time;

        $userDetails = UserDetails::find($userId);
        $userDetails->region = $region;
        $userDetails->time = $time;
        $userDetails->save();

        return $userDetails;
    }


    public function confirmDetails(Request $request){
        $userId = $request->user_id;
        $name = $request->name;
        $email = $request->email;
        $number = $request->number;
        $address = $request->address;
        $appartment = $request->appartment;

        $userDetails = UserDetails::find($userId);
        $userDetails->name = $name;
        $userDetails->email = $email;
        $userDetails->number = $number;
        $userDetails->address = $address;
        $userDetails->appartment = $appartment;
        $userDetails->save();

        return $userDetails;

    }

    public function storeBills(Request $request){
        $data = $request->all();
        $userId = $data['user_id'];

        $userDetails = UserDetails::find($userId);

        if(request()->file('first_file')){
            $fileWithExt = request()->file('first_file')->getClientOriginalName();
            $file = pathinfo($fileWithExt,PATHINFO_FILENAME);
            $extension = $request->file('first_file')->getClientOriginalExtension();
            $fileNameToStore = $file.'_'.time().'.'.$extension;
            request()->file('first_file')->storeAs('bills/',$userDetails->id.'/'.$fileNameToStore);

            $userDetails->bill1 = $fileNameToStore;
        }

        if(request()->file('second_file')){
            $fileWithExt = request()->file('second_file')->getClientOriginalName();
            $file = pathinfo($fileWithExt,PATHINFO_FILENAME);
            $extension = $request->file('second_file')->getClientOriginalExtension();
            $fileNameToStore = $file.'_'.time().'.'.$extension;
            request()->file('second_file')->storeAs('bills/',$userDetails->id.'/'.$fileNameToStore);

            $userDetails->bill2 = $fileNameToStore;
        }

        if(request()->file('third_file')){
            $fileWithExt = request()->file('third_file')->getClientOriginalName();
            $file = pathinfo($fileWithExt,PATHINFO_FILENAME);
            $extension = $request->file('third_file')->getClientOriginalExtension();
            $fileNameToStore = $file.'_'.time().'.'.$extension;
            request()->file('third_file')->storeAs('bills/',$userDetails->id.'/'.$fileNameToStore);

            $userDetails->bill3 = $fileNameToStore;
        }

        if(request()->file('fourth_file')){
            $fileWithExt = request()->file('fourth_file')->getClientOriginalName();
            $file = pathinfo($fileWithExt,PATHINFO_FILENAME);
            $extension = $request->file('fourth_file')->getClientOriginalExtension();
            $fileNameToStore = $file.'_'.time().'.'.$extension;
            request()->file('fourth_file')->storeAs('bills/',$userDetails->id.'/'.$fileNameToStore);

            $userDetails->bill4 = $fileNameToStore;
        }

        $userDetails->save();

        return $userDetails;
    }
}
