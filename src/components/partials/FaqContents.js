import React from 'react'

function FaqContents() {
    return (


        <div className="container row p-0 m-0 mx-auto">

            <div className='col-12 ml-auto pr-0' id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                چگونه کون خود را بشوریم
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            برای شستن کون خور ابتدشیر آب را باز میکنیم و از ولزم بودن آب اطمینان حاصل میکنیم
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                چگونه کون خود را بشوریم
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            برای شستن کون خور ابتدشیر آب را باز میکنیم و از ولزم بودن آب اطمینان حاصل میکنیم
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                چگونه کون خود را بشوریم
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            برای شستن کون خور ابتدشیر آب را باز میکنیم و از ولزم بودن آب اطمینان حاصل میکنیم
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default FaqContents
