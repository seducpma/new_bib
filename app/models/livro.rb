class Livro < ActiveRecord::Base
  after_create :multi_tombo, :auto_inc_tombo_seduc, :cria_possui_li,:disponibiliza
  #attr_accessible :assunto, :identificacao, :area, :editora, :localizacao, :tombo_seduc, :tombo_l, :colecao, :edicao, :data_edicao, :local_edicao, :resumo, :obs
  has_and_belongs_to_many :assuntos
  has_and_belongs_to_many :autores
  attr_accessor :qtde_livros, :lista_tombos, :usuario, :unidade
  has_many :tombos, :dependent => :destroy
  has_many :possuis, :dependent => :destroy
  has_many :dpus, :dependent => :destroy
  
  belongs_to :identificacao
  belongs_to :area
  belongs_to :editora
  belongs_to :localizacao
  #accepts_nested_attributes_for :assuntos, :reject_if => lambda {|a| a[:descricao].blank?}, :allow_destroy => true
  #accepts_nested_attributes_for :localizacao, :reject_if => lambda {|a| a[:local_guardado].blank?}, :allow_destroy => true
  validates_presence_of :identificacao_id, :message => "Campo obrigatório"
  validates_presence_of :area_id, :message => "Campo obrigatório"
  #validates_presence_of :lista_tombos, :message => "Campo obrigatório"
  #validates_presence_of :autor_ids, :message => "Campo obrigatório"
  validates_presence_of :localizacao_id, :message => "Campo obrigatório"
  validates_presence_of :editora_id, :message => "Campo obrigatório"
  validates_presence_of :localizacao_id, :message => "Campo obrigatório"
  validates_presence_of :assunto_ids, :message => "Campo obrigatório"
  


  def qtd_dif_num?
    qtd = self.lista_tombos.split(";")
    self.qtde_livros.to_i =! qtd.count
  end

  def multi_tombo
    multi = Tombo.new
    multi.livro_id = self.id
    multi.user_id = self.usuario
    multi.index_tombo = "#{self.id} - #{self.usuario}"
    multi.qtde_livro = self.qtde_livros
    multi.save
  end

  def auto_inc_tombo_seduc
    self.tombo_seduc = self.id
  end

  def disponibiliza
    disponivel = Dpu.new
    disponivel.livro_id = self.id
    disponivel.tipo = 1
    disponivel.tombo = "li-#{self.id}"
    disponivel.unidade_id = self.unidade
    disponivel.status = 1
    disponivel.save
  end

  def cria_possui_li
    possui = Possui.new
    possui.unidade_id = 3
    possui.tombo = "li-#{self.tombo_l}"
    possui.livro_id = self.id
    possui.status = 1
    possui.save
  end

end


