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
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('number')->nullable();
            $table->string("address");
            $table->string('appartment')->nullable();
            $table->string('bill')->nullable();
            $table->string('savings')->nullable();
            $table->string('home_value')->nullable();
            $table->string('tree_seedings')->nullable();
            $table->string('recommendedSolarKWH')->nullable();
            $table->string('panels')->nullable();
            $table->string('property')->nullable();
            $table->string('family')->nullable();
            $table->string('credit_score')->nullable();
            $table->string('dead_line')->nullable();
            $table->string('date')->nullable();
            $table->string('region')->nullable();
            $table->string('time')->nullable();
            $table->string("bill1")->nullable();
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
