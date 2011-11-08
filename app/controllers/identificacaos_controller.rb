class IdentificacaosController < ApplicationController
  def index
    @identificacaos = Identificacao.all
  end

  def show
    @identificacao = Identificacao.find(params[:id])
  end

  def new
    @identificacao = Identificacao.new
  end

  def create
    @identificacao = Identificacao.new(params[:identificacao])
    if @identificacao.save
      flash[:notice] = "Successfully created identificacao."
      redirect_to @identificacao
    else
      render :action => 'new'
    end
  end

  def edit
    @identificacao = Identificacao.find(params[:id])
  end

  def update
    @identificacao = Identificacao.find(params[:id])
    if @identificacao.update_attributes(params[:identificacao])
      flash[:notice] = "Successfully updated identificacao."
      redirect_to @identificacao
    else
      render :action => 'edit'
    end
  end

  def destroy
    @identificacao = Identificacao.find(params[:id])
    @identificacao.destroy
    flash[:notice] = "Successfully destroyed identificacao."
    redirect_to identificacaos_url
  end
end
