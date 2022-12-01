<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('number');
            $table->string("address");
            $table->string('appartment');
            $table->string('bill');
            $table->string('proprty');
            $table->string('family');
            $table->string('credit_score');
            $table->string('duration');
            $table->string('date');
            $table->string('region');
            $table->string('time');
            $table->string("bill1");
            $table->string('bill2')->nullable();
            $table->string('bill3')->nullable();
            $table->string("bill4")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
};
